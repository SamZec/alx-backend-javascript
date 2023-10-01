export default function guardrail(mathFunction) {
  const array = [];
  try {
    const res = mathFunction();
    array.push(res);
    array.push('Guardrail was processed');
  }
  catch(error) {
    array.push(error);
    array.push('Guardrail was processed');
  }
  return array;
}
