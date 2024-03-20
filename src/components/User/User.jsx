

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const userStyle={
        border:'5px solid yellow',
        padding:'10px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;