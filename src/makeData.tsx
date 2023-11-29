

const range = (len:any ) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
	  arr.push(i);
	}
	return arr;
  };
  
  const newPerson = (id: any) => {
	const statusChance = Math.random();
	return {
	  id: `row-${id}`,
	  firstName: "first name",
	  lastName: "last name",
	  age: Math.floor(Math.random() * 30),
	  visits: Math.floor(Math.random() * 100),
	  progress: Math.floor(Math.random() * 100),
	  status:
		statusChance > 0.66
		  ? "relationship"
		  : statusChance > 0.33
		  ? "complicated"
		  : "single",
	};
  };
  
  export default function makeData(...lens: any[]) {
	const makeDataLevel = (depth = 0): any => {
	  const len = lens[depth];
	  return range(len).map((d) => {
		return {
		  ...newPerson(d),
		  subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
		};
	  });
	};
  
	return makeDataLevel();
  }
  