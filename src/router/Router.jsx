import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorpage/ErrorPage";
  
  
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          // loader: () => fetch('https://serversite-pet-adoption.vercel.app/PetCategory')
        },
        // {
        //   path: '/petlisting',
        //   element: <PetListing></PetListing>
        // },
        // {
        //   path: '/catagorized_pets/:cat',
        //   element: <AllPetsByCategory></AllPetsByCategory>,
        //   loader: ({ params }) => fetch(`https://serversite-pet-adoption.vercel.app/petbycategory/${params.cat}`)
        // },
        // {
        //   path: '/adoptionreq',
        //   element:<PrivateRoute><AdoptionReqDashboard></AdoptionReqDashboard></PrivateRoute>
        // },
        // {
        //   path: '/donationcampaign',
        //   element: <DonationCampaign></DonationCampaign>
        // },
        // {
        //   path: '/donationcampaigndetails/:id',
        //   element: <PrivateRoute><DonationCampaignDetails></DonationCampaignDetails></PrivateRoute>,
        //   loader: ({ params }) => fetch(`https://serversite-pet-adoption.vercel.app/adddonationcamp/${params.id}`)
        // },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        // {
        //   path: '/userdashboard',
        //   element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
        // },
        // {
        //   path: '/addpet',
        //   element: <PrivateRoute><AddPetDashboard></AddPetDashboard></PrivateRoute>
        // },
        // {
        //   path: '/adoptpet/:id',
        //   element: <PrivateRoute><AdoptPet></AdoptPet></PrivateRoute>,
        //   loader: ({ params }) => fetch(`https://serversite-pet-adoption.vercel.app/pets/${params.id}`)
        // },
        // {
        //   path: '/myaddedpets',
        //   element: <PrivateRoute><MyAddedPetsDashboard></MyAddedPetsDashboard></PrivateRoute>
        // },
        // {
        //   path: '/createdonationcamp',
        //   element: <PrivateRoute><CreateDonationCampaignDashboard></CreateDonationCampaignDashboard></PrivateRoute>
        // },
        // {
        //   path: '/mydonation',
        //   element:<PrivateRoute> <MyDonationDashboard></MyDonationDashboard></PrivateRoute>
        // },
        // {
        //   path: '/updatedonationcamp/:donationCampaignId',
        //   element: <PrivateRoute><UpdateDonationCampDashboard></UpdateDonationCampDashboard></PrivateRoute>,
        //   loader: ({ params }) => fetch(`https://serversite-pet-adoption.vercel.app/adddonationcamp/${params.donationCampaignId}`)
        // },
  
  
        // {
        //   path: '/updatepet/:petId',
        //   element: <PrivateRoute><UpdatePetDashboard></UpdatePetDashboard></PrivateRoute>,
        //   loader: ({ params }) => fetch(`https://serversite-pet-adoption.vercel.app/pets/${params.petId}`)
  
        // },
        // {
        //   path: '/mydonationcamp',
        //   element: <PrivateRoute><MyDonationCampDashboard></MyDonationCampDashboard></PrivateRoute>
        // },
        // {
        //   path: '/allusers',
        //   element: <PrivateRoute><AllUsersDeshboard></AllUsersDeshboard></PrivateRoute>
        // },
        // {
        //   path: '/allpetsadmin',
        //   element: <PrivateRoute><AllPetsAdminDashboard></AllPetsAdminDashboard></PrivateRoute>
        // },
  
        // {
        //   path: '/alldonationcampadmin',
        //   element: <PrivateRoute><AllDonationCampAdminDashboard></AllDonationCampAdminDashboard></PrivateRoute>
        // },
  
  
  
  
  
      ]
    },
  
  ]);
  export default router;