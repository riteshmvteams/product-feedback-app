import HeaderTop from "../components/HeaderTop";
import editIcon from "../assets/shared/icon-edit-feedback.svg";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import DropDown from "../components/DropDown";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";

export default function FeedbackEdit() {
  const [visible, setVisible] = useState(false);
  return (
    <>
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
              <Button
                className="bg-red-500 text-white font-semibold"
                onClick={() => setVisible(true)}
              >
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
      <Modal visible={visible} setVisible={setVisible}>
        <div
          className={`max-w-md w-full bg-white transition-all duration-1000 z-20 px-4 py-6 rounded-xl`}
        >
          <h3 className="text-xl font-semibold text-clrText-primary">
            Are You Sure Want to Delete ?
          </h3>
          <p className="text-clrText-secondary text-sm">
            This Action will not be un-done once you delete the Feedback
          </p>

          <div className="mt-6 flex justify-end gap-6">
            <Button className="bg-red-500 text-white font-semibold text-sm">
              Delete
            </Button>
            <Button
              onClick={() => setVisible(false)}
              className="bg-clrBlue-400 text-white font-semibold text-sm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
