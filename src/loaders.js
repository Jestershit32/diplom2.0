export const postOneLoader = async ({ request, params }) => {

    const res = await fetch("http://localhost:3000/post/" + params.id)
    console.log({ request, params, res });
    return res.json();
}
export const postsLoader = async ({ request, params }) => {
    const res = await fetch("http://localhost:3000/post/")
    console.log({ request, params, res });
    return res.json();
}
export const userLoader = async ({ request, params }) => {
    const res = await fetch("http://localhost:3000/profile/" + params.id)
    console.log({ request, params, res });
    return res.json();
}
