import HeaderTop from "../components/HeaderTop";
import editIcon from "../assets/shared/icon-edit-feedback.svg";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import DropDown from "../components/DropDown";
import Button from "../components/Button";

export default function FeedbackEdit() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <HeaderTop hidden />

      <div className="relative px-6 bg-white rounded-xl mt-16 pt-16 pb-10">
        <figure className="grid place-content-center absolute -top-6 left-10">
          <img className="w-14" src={editIcon} alt="plusIcon" />
        </figure>

        <h2 className="text-xl lg:text-2xl font-bold text-clrText-primary ">
          Editing 'Add tags for solutions'
        </h2>

        <form className="flex flex-col gap-10 mt-10">
          <Input
            name="Feedback_title"
            label="Feedback Title"
            subLabel="Add a short, descriptive headline."
          />
          <DropDown
            label="Category"
            subLabel="Choose a category for your feedback."
            type="input"
            options={[{ name: "hello" }]}
          />

          <DropDown
            label="Update Status"
            subLabel="Change feature state"
            type="input"
            options={[{ name: "hello" }]}
          />

          <TextArea
            name="feedback_detail"
            label="Feedback Detail"
            subLabel="Include any specific comments on what should be improved, added, etc."
          />

          <div className="flex justify-between gap-6">
            <Button className="bg-red-500 text-white font-semibold">
              Delete
            </Button>
            <div className="flex items-center gap-4">
              <Button className="bg-clrBlue-400 text-white font-semibold">
                Cancel
              </Button>
              <Button className="bg-clrBtn-voilet text-white font-semibold">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
