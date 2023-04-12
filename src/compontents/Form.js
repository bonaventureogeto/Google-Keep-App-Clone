function Form() {
    return (
        <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Email:
            <input type="email" name="email" />
        </label>
        <label>
            Password:
            <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;