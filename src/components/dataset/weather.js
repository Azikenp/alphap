const dataset = [
    {
      registrations: 650,
      month: 'Ja',
    },
    {
      registrations: 950,
      month: 'Fe',
    },
    {
      registrations: 780,
      month: 'Ma',
    },
    {
      registrations: 420,
      month: 'Ap',
    },
    {
      registrations: 1000,
      month: 'Ma',
    },
    {
      registrations: 580,
      month: 'Ju',
    },
    {
      registrations: 860,
      month: 'Jl',
    },
    {
      registrations: 380,
      month: 'Au',
    },
    {
      registrations: 850,
      month: 'Se',
    },
    {
      registrations: 650,
      month: 'Oc',
    },
    {
      registrations: 980,
      month: 'No',
    },
    {
      registrations: 600,
      month: 'De',
    },
  ];
  
  function valueFormatter(value) {
    return `${value}mm`;
  }
  
  export { dataset, valueFormatter };
  