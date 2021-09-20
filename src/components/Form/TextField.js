import { Controller } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

const FormTextField = ({
  control,
  name,
  label,
  required = false,
  variant = 'standard',
  fullWidth = false,
  defaultValue = '',
  rules,
  ...props
}) => (
  <FormControl fullWidth={fullWidth}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required,
        ...rules,
      }}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            required
            id={name}
            label={label || name}
            variant={variant}
            error={invalid}
            {...field}
            {...props}
          />
        );
      }}
    ></Controller>
  </FormControl>
);

export default FormTextField;
