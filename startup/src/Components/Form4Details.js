import './Form4Details.css'

const Form4Details = () => {
    return ( 
        <div>
            <form className="contactform">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form4Details;
