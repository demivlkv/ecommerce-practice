import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { shades } from '../../theme';

const Footer = () => {
  const { palette: {neutral} } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>
            Liberté
          </Typography>
          <div>
            Eros in cursus turpis massa tincidunt dui ut ornare. Nisl tincidunt eget nullam non nisi.
            Posuere urna nec tincidunt praesent semper feugiat nibh. Libero enim sed faucibus turpis in.
            Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeifght="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeifght="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 30%, 40%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>
            Contact Us
          </Typography>
          <Typography mb="30px">123 N Ocean Ave, Hermosa Beach, CA 90742</Typography>
          <Typography mb="30px">Email: shop@liberte.com</Typography>
          <Typography mb="30px">(123) 867-5309</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;