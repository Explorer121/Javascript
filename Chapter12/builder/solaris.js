function buildSolaris () {
  if (window.Select) {
    var value;

    var form = new Form('form', 'confirm.htm');

    value = selects['setup'].add('setupSOL',true);
    form.add('setup', value);

    value = selects['os'].add('osSOL7',true);
    form.add('os', value);
    
    value = selects['procs'].add('p440',true);
    form.add('procs', value);

    value = selects['mem'].add('m256',true);
    selects['mem'].add('m384');
    selects['mem'].add('m512');
    selects['mem'].add('m768');
    selects['mem'].add('m1024');
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