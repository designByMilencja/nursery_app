"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EmployeeSchema } from "@/lib/validation"
import React from "react"

const CandidateForm = () => {
    const form = useForm<z.infer<typeof EmployeeSchema>>({
        resolver: zodResolver(EmployeeSchema),
        defaultValues: {
          nameSurname: "",
          city: "",
          addressEmail: "",
          ocupation: "",
          specialization: "",
          hours: 1,
          contractType: "",
          additional: ""
        },
      })
      function onSubmit(values: z.infer<typeof EmployeeSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-108">
        <h2 className='paragraph-semibold text-dark400_light800'>1. Twoje dane</h2>
        <FormField
          control={form.control}
          name="nameSurname"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Imię i nazwisko <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Miasto <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="addressEmail"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Adres email <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <h2>2. Informacje o doświadczeniu zawodowym</h2>
          <FormField
          control={form.control}
          name="ocupation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Stanowisko <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="specialization"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Specjalizacja <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="hours"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Dyspozycja godzinowa <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="contractType"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Rodzaj umowy <span className="text-primary-500">*</span></FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additional"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Informacje dodatkowe
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <Button type="submit">Dodaj swój profil</Button>
      </form>
    </Form>
  )
}

export default CandidateForm
