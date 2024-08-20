const MyProfile = ({ params }: { params: { id: any } }) => {
    console.log(params);
    return (
        <div>MyProfile {params.id}</div>
    );
};

export default MyProfile;