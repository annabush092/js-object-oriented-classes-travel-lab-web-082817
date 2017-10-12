class Driver {

  constructor(name, dateStr) {
    this.name = name;
    this.startDate = this.startDate(dateStr);
  }

  startDate(dateStr) {
    return (new Date(dateStr));
  }

  yearsExperienceFromBeginningOf(endYear) {
    const end = new Date([endYear], 0);
    const begin = this.startDate
    return end.getFullYear() - this.startDate.getFullYear() - 1
  }

}

class Route {
  constructor(beginParams, endParams) {
    this.beginHorizontal = beginParams.horizontal
    this.beginVertical = beginParams.vertical
    this.endHorizontal = endParams.horizontal
    this.endVertical = endParams.vertical
  }

  findHorizontal(streetName) {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    return eastWest.findIndex(
      function(element){
        return streetName === element;
      }
    );
  }

  blocksTravelled() {
    const vertDistance = this.endVertical - this.beginVertical;
    const horDistance = this.findHorizontal(this.endHorizontal) - this.findHorizontal(this.beginHorizontal);
    return vertDistance + horDistance;
  }

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled()/2
      // 2 blocks/min
    } else {
      return this.blocksTravelled()/3
      // 3 blocks/min
    }
  }
}
