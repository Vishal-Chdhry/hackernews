import { getAsk, getPosts } from "../../lib/api"

type Props = {
  posts: any
}

const Post = ({ posts }: Props) => {
  console.log(posts)
  return <div>{posts[0].title}</div>
}

export async function getStaticProps() {
  const list = await getAsk()
  const posts = await getPosts(list.posts.slice(0, 20))
  return {
    props: {
      posts,
    },
  }
}

export default Post
