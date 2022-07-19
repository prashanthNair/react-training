import React from 'react'
import Layout from '../components/layout'
import Billinginformation from '../components/profile/billinginformation'
import Businessdetail from '../components/profile/businessdetail'
import Contactinfo from '../components/profile/contactinfo'
import Verifydocument from '../components/profile/verifydocument'
import Bankdetail from '../components/profile/bankdetail'

function Profile() {
    return (
        <Layout>
            <div>
                <Contactinfo></Contactinfo>
                <Businessdetail></Businessdetail>
                <Billinginformation></Billinginformation>
                <Bankdetail></Bankdetail>
                <Verifydocument></Verifydocument>
            </div>
        </Layout>
    )
}

export default Profile    