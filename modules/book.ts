//modules
//export, export default modules

export
 const Categories=[
  'SHORT STORIES',
  'SCI-FI',
  'SPY STORIES'
]
const MyCategories=[
  'SHORT STORIES',
  'SCI-FI',
  'SPY STORIES'
]
// per esportare di default
export default class Book{
  title: string;
  author:string;
  content:string;
  year: number;
}