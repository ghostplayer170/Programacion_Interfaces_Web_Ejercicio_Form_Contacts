import { FreshContext, Handlers } from "$fresh/server.ts";
import Form from "../islands/Form.tsx";
import ContactModel from "../db/Contact.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        age: form.get("age"),
        email: form.get("email"),
      };

      await ContactModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const submitform = () => {
  return (
    <div>
      <Form />
      <div>
        <h2>Form Submited</h2>
      </div>
    </div>
  );
};

export default submitform;