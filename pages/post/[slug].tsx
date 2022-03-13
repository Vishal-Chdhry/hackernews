import { getAllPosts, getItemById } from "../../lib/api"
import ErrorPage from "next/error"

type Props = {
  post: any
}

const Post = ({ post }: Props) => {
  if (post.error) return <ErrorPage statusCode={404} />
  return <div>{post.title}</div>
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getItemById(params.slug)

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = (await getAllPosts()).posts
  const paths = posts.map(post => ({ params: { slug: `${post}` } }))

  return {
    paths,
    fallback: "blocking",
  }
}

export default Post
