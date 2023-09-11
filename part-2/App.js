function App() {
    return (
        <div>
            <Tweet
            name="Matt Lane"
            username="mattylanie"
            date={new Date().toDateString()}
            message="This app will disrupt everything!"
            />

            <Tweet
            name="Louis Wilson"
            username="louwill"
            date={new Date().toDateString()}
            message="Yurp"
            />

            <Tweet
            name="Trent Reznor"
            username="nin"
            date={new Date().toDateString()}
            message="Bleepbleep"
            />
        </div>
    );
}