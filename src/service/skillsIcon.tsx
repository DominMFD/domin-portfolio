import { BiLogoTypescript, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoAngular, BiLogoJava } from "react-icons/bi"
import { SiCsharp } from "react-icons/si";
import { TSkill } from "./types/skills.types";

export const skillsIcon: TSkill[] = [
    {
      name: 'html',
      icon: <BiLogoHtml5 color="#E44D26" size="25px" />
    },
    {
      name: 'css',
      icon: <BiLogoCss3  color="#006BC0" size="25px" />
    },
    {
      name: 'js',
      icon: <BiLogoJavascript  color="#F7E018" size="25px" />
    },
    {
      name: 'ts',
      icon: <BiLogoTypescript  color="#2D79C7" size="25px" />
    },
    {
      name: 'react',
      icon: <BiLogoReact  color="#2D79C7" size="25px" />
    },
    {
      name: 'react native',
      icon: <BiLogoReact  color="#2D79C7" size="25px" />
    },
    {
        name: 'angular',
        icon: <BiLogoAngular  color="#DE002D" size="30px" />
      },
    {
      name: 'java',
      icon: <BiLogoJava color="#F39110" size="25px" />
    },
    {
      name: 'csharp',
      icon: <SiCsharp  color="#876CE3" size="25px" />
    },

]
    
