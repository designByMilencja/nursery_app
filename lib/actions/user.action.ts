"use server"
import {User} from '@/models/user.model'
import {connectToDatabase} from "@/lib/mongoose";
import {DeleteUserParams, UpdateUserParams} from "@/lib/actions/shared.types";
import {revalidatePath} from "next/cache";

export async function getUserById(params: any) {
    console.log('para', params)
    try {
        connectToDatabase()
        const user = await User.findOne({_id: params}).select('-password -_id')
        console.log('dane z pobierania usera', user)
        return user
    } catch (e) {
        console.log('error z pobierania usera', e)
        throw e
    }
}

export async function updateUser(params: UpdateUserParams) {
    try {
        connectToDatabase()
        const {id, updateData, path} = params
        await User.findOneAndUpdate({id}, {updateData}, {new: true});
        revalidatePath(path)
    } catch (e) {
        console.log('error z updatowania usera', e)
        throw e
    }
}

export async function deleteUser(params: DeleteUserParams) {
    try {
        connectToDatabase()
        console.log(params, 'params to delete')
        const user = await User.findOne({_id: params})
        console.log('user był', user)
        if (!user) {
            throw new Error('Użytkownik o takim id nie został znaleziony')
        }
// kasowanie usera
        const deletedUser = await User.findByIdAndDelete({_id:params})
        console.log('user ale go usunieto', deletedUser)
        return deletedUser
    } catch (e) {
        console.log('error z usuwania usera', e)
        throw e
    }
}
