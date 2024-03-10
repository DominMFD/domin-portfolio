import { BiLogoTypescript, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoAngular, BiLogoJava } from "react-icons/bi"
import { SiCsharp } from "react-icons/si";
import { TSkill } from "./types/skills.types";

export const skillsIcon: TSkill[] = [
    {
      name: 'html',
      level: 70,
      icon: <BiLogoHtml5 color="#E44D26" size="30px" />
    },
    {
      name: 'css',
      level: 70,
      icon: <BiLogoCss3  color="#006BC0" size="30px" />
    },
    {
      name: 'js',
      level: 60,
      icon: <BiLogoJavascript  color="#F7E018" size="30px" />
    },
    {
      name: 'ts',
      level: 60,
      icon: <BiLogoTypescript  color="#2D79C7" size="30px" />
    },
    {
      name: 'react',
      level: 55,
      icon: <BiLogoReact  color="#2D79C7" size="30px" />
    },
    {
      name: 'react native',
      level: 50,
      icon: <BiLogoReact  color="#2D79C7" size="30px" />
    },
    {
        name: 'angular',
        level: 40,
        icon: <BiLogoAngular  color="#DE002D" size="30px" />
      },
    {
      name: 'java',
      level: 40,
      icon: <BiLogoJava color="#F39110" size="30px" />
    },
    {
      name: 'csharp',
      level: 40,
      icon: <SiCsharp  color="#876CE3" size="30px" />
    },

]
    
