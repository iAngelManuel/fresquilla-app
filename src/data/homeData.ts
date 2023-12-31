import { ContentIconA, ContentIconB, ContentIconC } from '../svg/SvgIcons'

interface ContentData {
  id: number
  content: () => JSX.Element
  title: string
  description: string
}

export const contentData: ContentData[] = [
  {
    id: 1,
    content: ContentIconA,
    title: 'Producto de Calidad',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime eum iure architecto aut reiciendis alias quis adipisci, ducimus nulla, aperiam maiores error dolorum similique et ea! Exercitationem, beatae ab!'
  },
  {
    id: 2,
    content: ContentIconB,
    title: 'Hecho con amor',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime eum iure architecto aut reiciendis alias quis adipisci, ducimus nulla, aperiam maiores error dolorum similique et ea! Exercitationem, beatae ab!'
  },
  {
    id: 3,
    content: ContentIconC,
    title: 'Perfecto para un regalo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime eum iure architecto aut reiciendis alias quis adipisci, ducimus nulla, aperiam maiores error dolorum similique et ea! Exercitationem, beatae ab!'
  }
]
