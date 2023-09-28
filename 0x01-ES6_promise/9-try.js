export default function guardrail(mathFunction) {
  let array = [];
  const res = mathFunction();
  array.push(res);
  array.push('Guardrail was processed');
  return array;
}
