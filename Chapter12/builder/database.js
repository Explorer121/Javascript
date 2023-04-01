if (window.Select) {
  var selects = new Array();

  createSelect('choice', 'Configuration');
  createSelect('setup', 'Setup');
  createSelect('os',    'Operating System');
  createSelect('procs', 'Processor');
  createSelect('mem',   'Memory');
  createSelect('hd1',   'Hard Drive');
  createSelect('hd2',   '2nd Hard Drive');
  createSelect('hd3',   '3rd Hard Drive');
  createSelect('hd4',   '4th Hard Drive');
  createSelect('data',  'Data Transfer');

  var options = new Array();

  createOption('setupNT',  'Setup', '250.00');
  createOption('setupRH',  'Setup', '250.00');
  createOption('setupRAQ', 'Setup', '200.00');
  createOption('setupSOL', 'Setup', '350.00');

  createOption('osNT4.0', 'Windows NT 4.0', '');
  createOption('osRH7.0', 'Red Hat 7.0',    '');
  createOption('osRAQ4',  'Cobalt Linux',   '');
  createOption('osSOL7',  'Solaris 7',      '');

  createOption('p600',   '600 Mhz',  '70.00');
  createOption('p700',   '700 Mhz', '100.00');
  createOption('p800',   '800 Mhz', '150.00');
  createOption('p900',   '900 Mhz', '200.00');
  createOption('p1000', '1000 Mhz', '260.00');
  createOption('p440', 'Ultra Sparc lli 440', '600.00');

  createOption('m64',     '64Mb RAM',  '10.00');
  createOption('m128',   '128Mb RAM',  '20.00');
  createOption('m192',   '192Mb RAM',  '40.00');
  createOption('m256',   '256Mb RAM',  '80.00');
  createOption('m384',   '384Mb RAM', '160.00');
  createOption('m512',   '512Mb RAM', '320.00');
  createOption('m768',   '768Mb RAM', '500.00');
  createOption('m1024', '1024Mb RAM', '800.00');

  createOption('--', '--', '');
  createOption('h10eide', '10 Gb EIDE',  '40.00');
  createOption('h20eide', '20 Gb EIDE',  '80.00');
  createOption('h30eide', '30 Gb EIDE', '120.00');
  createOption('h9scsi',   '9 Gb SCSI',  '60.00');
  createOption('h18scsi', '18 Gb SCSI', '120.00');
  createOption('h27scsi', '27 Gb SCSI', '180.00');

  createOption('b10',   '10Gb/Month',       '');
  createOption('b25',   '25Gb/Month',  '25.00');
  createOption('b50',   '50Gb/Month',  '75.00');
  createOption('b100', '100Gb/Month', '150.00');
  createOption('b150', '150Gb/Month', '225.00');
  createOption('b200', '200Gb/Month', '290.00');
  createOption('b250', '250Gb/Month', '365.00');
}