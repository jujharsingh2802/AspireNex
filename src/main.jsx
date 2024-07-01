import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import { GoogleOAuthProvider } from '@react-oauth/google';
import MyPosts from './pages/MyPosts'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import Blogs from "./pages/Blogs"
import conf from './conf/conf.js'
import AllQuestions from './pages/AllQuestions.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-ques",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllQuestions />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/my-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <MyPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/blogs",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Blogs />
                    </AuthLayout>

            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId={conf.googleClientId}>


    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)