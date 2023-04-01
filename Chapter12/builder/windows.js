function buildWindows () {
  if (window.Select) {
    var value;

    var form = new Form('form', 'confirm.htm');

    value = selects['setup'].add('setupNT',true);
    form.add('setup', value);

    value = selects['os'].add('osNT4.0',true);
    form.add('os', value);

    value = selects['procs'].add('p600',true);
    selects['procs'].add('p700');
    selects['procs'].add('p800');
    selects['procs'].add('p900');
    selects['procs'].add('p1000');
    form.add('procs', value);

    value = selects['mem'].add('m64',true);
    selects['mem'].add('m128');
    selects['mem'].add('m192');
    selects['mem'].add('m256');
    selects['mem'].add('m384');
    selects['mem'].add('m512');
    form.add('mem', value);

    value = selects['hd1'].add('h10eide',true);
    selects['hd1'].add('h20eide');
    selects['hd1'].add('h30eide');
    selects['hd1'].add('h9scsi');
    selects['hd1'].add('h18scsi');
    selects['hd1'].add('h27scsi');
    form.add('hd1', value);

    value = selects['hd2'].add('--',true);
    selects['hd2'].add('h20eide');
    selects['hd2'].add('h30eide');
    selects['hd2'].add('h9scsi');
    selects['hd2'].add('h18scsi');
    selects['hd2'].add('h27scsi');
    form.add('hd2', value);

    value = selects['hd3'].add('--',true);
    selects['hd3'].add('h20eide');
    selects['hd3'].add('h30eide');
    selects['hd3'].add('h9scsi');
    selects['hd3'].add('h18scsi');
    selects['hd3'].add('h27scsi');
    form.add('hd3', value);

    value = selects['hd4'].add('--',true);
    selects['hd4'].add('h20eide');
    selects['hd4'].add('h30eide');
    selects['hd4'].add('h9scsi');
    selects['hd4'].add('h18scsi');
    selects['hd4'].add('h27scsi');
    form.add('hd4', value);

    value = selects['data'].add('b10',true);
    selects['data'].add('b25');
    selects['data'].add('b50');
    selects['data'].add('b100');
    selects['data'].add('b150');
    selects['data'].add('b200');
    selects['data'].add('b250');
    form.add('data', value);
  }

  return form;
}