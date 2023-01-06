import React from 'react';
import { Box, TextField, useMediaQuery } from '@mui/material';
import { getIn } from 'formik';

const AddressForm = ({ type, values, errors, touched, handleBlur, handleChange }) => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  // these functions allow for better code readability
  const formatName = field => `${type}.${field}`;
  const formatError = field =>
  Boolean(
    getIn(touched, formatName(field)) && getIn(errors, formatName(field))
  );
  const formatHelper = field =>
    getIn(touched, formatName(field)) && getIn(errors, formatName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : 'span 4' }
      }}
    >
      <TextField
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formatName('firstName')}
        error={formatError('firstName')}
        helperText={formatHelper('firstName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formatName('lastName')}
        error={formatError('lastName')}
        helperText={formatHelper('lastName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formatName('country')}
        error={formatError('country')}
        helperText={formatHelper('country')}
        sx={{ gridColumn: 'span 4' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formatName('street1')}
        error={formatError('street1')}
        helperText={formatHelper('street1')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address 2 (optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formatName('street2')}
        error={formatError('street2')}
        helperText={formatHelper('street2')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formatName('city')}
        error={formatError('city')}
        helperText={formatHelper('city')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formatName('state')}
        error={formatError('state')}
        helperText={formatHelper('state')}
        sx={{ gridColumn: '1fr' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formatName('zipCode')}
        error={formatError('zipCode')}
        helperText={formatHelper('zipCode')}
        sx={{ gridColumn: '1fr' }}
      />
    </Box>
  );
};

export default AddressForm;