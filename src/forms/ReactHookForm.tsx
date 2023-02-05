import { Box, Container } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Container>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {/* register your input into the hook by invoking the "register" function */}
          <label htmlFor="firstName">First Name: </label>
          <input defaultValue="test" {...register("example")} />
        </Box>
        {/* include validation with required or other standard HTML validation rules */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <label htmlFor="checkboxExample">Checkbox Example</label>
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </Box>

        <input type="submit" />
      </form>
    </Container>
  );
};

export default ReactHookForm;
