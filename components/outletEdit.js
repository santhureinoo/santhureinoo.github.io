import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";

export default function OutLetEdit({ showOutletDetail }) {
  return (
    <Card className={showOutletDetail ? "hidden" : ""}>
      <CardBody>
        <form>
          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input type="text" color="purple" placeholder="Username" />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Input type="email" color="purple" placeholder="Email Address" />
            </div>
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input type="text" color="purple" placeholder="First Name" />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Input type="email" color="purple" placeholder="Last Name" />
            </div>
          </div>
          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            About Me
          </h6>
          <div className="flex flex-wrap mt-10 font-light">
            <Textarea color="purple" placeholder="About Me" />
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
