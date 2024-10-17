function localStorage() {
    const user = localStorage.getItem("user");
    
    return (
    <div>
        <div>
            <button onClick={() => localStorage.setItem("user", "ini data")}>  </button>
        </div>
    </div>
    );
}

export default localStorage;