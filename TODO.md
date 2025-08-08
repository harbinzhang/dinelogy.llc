# TODO - Website Links and Features

## Hidden/Disabled Links
The following links were identified as fake placeholders (`href="#"`) and have been hidden by converting them to non-clickable text:

### Footer Component (src/components/Footer.tsx)
- **About Us** - Originally linked to `#`, now displayed as gray text
- **Features** - Originally linked to `#`, now displayed as gray text  
- **Pricing** - Originally linked to `#`, now displayed as gray text
- **Support** - Originally linked to `#`, now displayed as gray text

### Login Page (src/pages/Login.tsx)
- **Forgot password?** - Originally linked to `#`, now displayed as gray text
- **Sign up for free** - Originally linked to `#`, now displayed as gray text

## Future Implementation Tasks

### Links to Implement
- [ ] Create About Us page and link from footer
- [ ] Create Features page and link from footer
- [ ] Create Pricing page and link from footer  
- [ ] Create Support/Help page and link from footer
- [ ] Implement forgot password functionality
- [ ] Implement user registration functionality

### Functional Improvements
- [ ] Make contact form functional (currently just UI)
- [ ] Add form validation to login and contact forms
- [ ] Connect login form to authentication system
- [ ] Add loading states for form submissions

### Working External Links
The following external links are functional and should remain:
- `https://dinelogy.app` - Restaurant Dashboard
- `https://order.dinelogy.app/seller/NaUZUMs2hoMdofeotgR3xUnf51D3/table/0` - Customer App Demo

## Notes
- All fake links have been converted to `<span>` elements with gray styling to indicate they are not functional
- This maintains the visual layout while clearly showing these are placeholders