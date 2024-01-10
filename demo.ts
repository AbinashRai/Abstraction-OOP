abstract class demo {
  constructor() {}
  getMsg() {
    console.log("running");
  }
}

class subDemo extends demo {
  getMsg(): string {
    return "heyyyy";
  }
}

class subDemo1 extends demo {
    
}

const dem = new subDemo();
dem.getMsg();

