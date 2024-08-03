import { StaticImageData } from "next/image"

export type TExperienceCard = {
  logo: StaticImageData,
  title: string,
  name: string,
  date: string,
  description: string,
}