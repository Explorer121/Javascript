function buildCobalt () {
  if (window.Select) {
    var value;

    var form = new Form('form', 'confirm.htm');

    value = selects['setup'].add('setupRAQ',true);
    form.add('setup', value);
    
    value = selects['os'].add('osRAQ4',true);
    form.add('os', value);
    
    value = selects['procs'].add('p600',true);
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
    form.add('hd1', value);

    value = selects['hd2'].add('--',true);
    selects['hd2'].add('h20eide');
    selects['hd2'].add('h30eide');
    form.add('hd2', value);

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