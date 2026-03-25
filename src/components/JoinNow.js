import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{"https://discord.com/oauth2/authorize?client_id=1485648135249465415&permissions=8&integration_type=0&scope=bot+applications.commands"}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
