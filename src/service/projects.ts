import WebPokeDexImage from '../../public/webpokedex.png';
import GitFindImage from '../../public/gitfind.png';
import BuzzFeedImage from '../../public/buzzFeed.png';
import HBOPageImage from '../../public/hbopage.png';
import DominBlogImage from '../../public/DominBlog.png';
import MiranhaVersoImage from '../../public/miranhaverso.png';
import ValorantPageImage from '../../public/ValorantPage.png';
import CalculdoraReactImage from '../../public/calculadoraReact.png';
import { TProjects } from './types/projects.types';

export const PROJECTS: TProjects[] = [
    {
        title: 'WebPokedex',
        link: 'https://dominmfd.github.io/WebPokeDex/',
        image: WebPokeDexImage,
        skills: [
            'html',
            'css',
            'js',
        ]
    },
    {
        title: 'Git Find',
        link: 'https://react-git-find.vercel.app',
        image: GitFindImage,
        skills: [
            'html',
            'css',
            'js',
            'react',
        ]
    },
    {
        title: 'BuzzFeed',
        link: 'https://angular-buzzfeed-five.vercel.app',
        image: BuzzFeedImage,
        skills: [
            'html',
            'css',
            'ts',
            'angular',
        ]
    },
    {
        title: 'HBO Page',
        link: 'https://dominmfd.github.io/HBO-Page/',
        image: HBOPageImage,
        skills: [
            'html',
            'css',
        ]
    },
    {
        title: 'DominBlog',
        link: 'https://angular-web-blog.vercel.app',
        image: DominBlogImage,
        skills: [
            'html',
            'css',
            'ts',
            'angular',
        ]
    },
    {
        title: 'MiranhaVerso',
        link: 'https://dominmfd.github.io/MiranhaVerso/',
        image: MiranhaVersoImage,
        skills: [
            'html',
            'css',
            'js',
        ]
    },
    {
        title: 'Valorant Guia',
        link: 'https://dominmfd.github.io/Bootstrap-valorantPage/',
        image: ValorantPageImage,
        skills: [
            'html',
            'css',
        ]
    },
    {
        title: 'Calculadora React',
        link: 'https://calculadora-react-theta-rouge.vercel.app',
        image: CalculdoraReactImage,
        skills: [
            'html',
            'js',
            'react',
        ]
    }
]