import * as z from "zod"
// tworze tu pola do formularza dla pracodawcy aby przystąpił do wyswietlanych ogłoszeń
export const EmployerSchema = z.object({
    companyName: z.string().min(2).max(150),
    city: z.string().min(2).max(150),
    addressEmail: z.string().min(2).max(80),
    position: z.string().min(2).max(150),
    positionDesc: z.string().min(2).max(150),
    requirements: z.string().min(2).max(150),
    contractType: z.string().min(2).max(150),
    additional: z.string().min(2).max(200)
  })

  export const EmployeeSchema = z.object({
    nameSurname: z.string().min(2).max(150),
    city: z.string().min(2).max(150),
    addressEmail: z.string().min(2).max(80),
    ocupation: z.string().min(2).max(150),
    specialization: z.string().min(2).max(150),
    contractType: z.string().min(2).max(150),
    hours: z.number().min(1).max(3),
    additional: z.string().min(2).max(200)
  })