import React, {useState, useEffect} from 'react';
import Layout from '../components/layout'
import Billinginformation from '../components/profile/billinginformation'
import Businessdetail from '../components/profile/businessdetail'
import Contactinfo from '../components/profile/contactinfo'
import Verifydocument from '../components/profile/verifydocument'
import Bankdetail from '../components/profile/bankdetail'
import ProfileDetails from '../components/profile/profileDetails'
import axios from "axios"

const baseURL = "https://api.dev.migobucks.com/brand/details/prashanthmsktm@gmail.com";


function Profile() {

    const [profiledata, setProfiledata] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log("axios response", response)
            debugger;
            setProfiledata(response.data.data);
        });
      }, []);

      if(profiledata==null)
      return(<Layout/>)
    

    return (
        <Layout>
            <div>
                <ProfileDetails data={profiledata}></ProfileDetails>

            </div>
        </Layout>
    )
}

export default Profile    