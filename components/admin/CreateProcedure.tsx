"use client"
import React from "react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ProcedureSchema } from "@/lib/validation"

const CreateProcedure = () => {
  const form = useForm<z.infer<typeof ProcedureSchema>>({
    resolver: zodResolver(ProcedureSchema),
    defaultValues: {
      title: "",
      image: "",
      description: "",
      tags: [],
    },
  })
  function onSubmit(values: z.infer<typeof ProcedureSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
    return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
      <h2 className="paragraph-semibold text-dark400_light800">Dodaj informacje dotyczace procedury</h2>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tytuł procedury <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Link do zdjęcia <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Krótki opis procedury <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tagi <span className="text-primary-500">*</span>
              </FormLabel>
              <FormDescription className="body-regular mt-2.5 text-light-500">Dodaj maksymalnie trzy tagi dotyczące artykułu, oddzielając je spacjami.</FormDescription>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <Button type="submit" className="primary-gradient m-2 min-h-[46px] rounded-lg px-4 py-3 text-light-900">Dodaj swój profil</Button>
      </form>
    </Form>
    );
  };
  
  export default CreateProcedure;
  