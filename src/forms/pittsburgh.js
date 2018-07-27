export const pittsburgh = {
  pages: [
    {
      name: 'Applicant Information',
      elements: [
        {
          type: 'text',
          name: 'name',
          title: 'Name',
          isRequired: true
        },
        {
          type: 'text',
          name: 'phone',
          title: 'Phone',
          inputType: 'tel',
          isRequired: true
        },
        {
          type: 'text',
          name: 'cell-phone',
          title: 'Cell Phone',
          inputType: 'tel',
          inputFormat: '(999) 999-9999'
        },
        {
          type: 'text',
          name: 'email',
          title: 'E-Mail Address',
          validators: [
            {
              type: 'email',
              text: 'Please enter a valid email address.'
            }
          ],
          inputType: 'email',
          isRequired: true
        }
      ]
    }
  ]
}
