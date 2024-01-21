type Flower = {
  id: string
  name: string
  price: number
  description: string
  ingredients: string
  icon: string
  feedbacks: Feedback[]
}

type Feedback = {
  id: string
  authorName: string
  stars: number
  text: string
}

export type { Flower }
