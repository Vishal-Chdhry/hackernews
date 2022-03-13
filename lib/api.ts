type Posts = {
  posts: number[]
}

export async function getAllPosts(): Promise<Posts> {
  const listJSON = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
  )

  const posts = (await listJSON.json()) as number[]
  return { posts }
}

export async function getItemById(id: string | number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  )

  const post = await response.json()
  if (post === null) return { error: "Post doesn't exists" }
  return post
}

export async function getPosts(arr: number[] | string[]) {
  const responses = await Promise.all(
    arr.map(async post => {
      const res = await getItemById(post)
      return res
    })
  )
  return responses
}
export async function getNewPosts(): Promise<Posts> {
  const listJSON = await fetch(
    `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`
  )

  const posts = await listJSON.json()
  return { posts }
}

export async function getAsk(): Promise<Posts> {
  const listJSON = await fetch(
    `https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`
  )

  const posts = await listJSON.json()
  return { posts }
}

export async function getJobListings(): Promise<Posts> {
  const listJSON = await fetch(
    `https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`
  )

  const posts = await listJSON.json()
  return { posts }
}

export async function getBestPosts(): Promise<Posts> {
  const listJSON = await fetch(
    `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`
  )

  const posts = await listJSON.json()
  return { posts }
}
