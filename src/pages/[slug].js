import Layout from 'components/Layout'

export default function Page({ post, socialImage, related }) {


    return (
        <Layout classes={'bg-white'}>
            <h1>asdkalsdj</h1>

        </Layout>
    )
}

export async function getServerSideProps({ params = {} } = {}) {
    console.log(params)
    return {
        props: {}
    }
}
