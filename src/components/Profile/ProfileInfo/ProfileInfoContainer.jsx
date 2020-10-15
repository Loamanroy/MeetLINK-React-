import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        MainProfile: state.ProfileData.MainProfile,
    }
}


const ProfileInfoContainer = connect (mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;