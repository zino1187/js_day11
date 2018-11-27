/*마스게임에 사용될 판넬 한개를 정의한다!!
   이 패널은 마우스를 올려놓으면, opacity 값이 
   0에 가까워져서 결국 투명하게 된다..(부드럽게)
*/
class Box{
	constructor(container,width,height,bg){
		this.a=0.1;//비율 계수:부드러운 정보(기울기)
		this.targetOp=1;//목표지점

		this.div=document.createElement("div");
		this.div.style.width=width+"px";			
		this.div.style.height=height+"px";
		this.div.style.background=bg;
		this.div.style.opacity=1;//불투명
		//마우스를 올려놓으면, 타겟 투명도를 0으로 놓자!!
		var me=this;
		this.div.addEventListener("mouseover",function(){
			me.div.targetOp=0;
		});

		container.appendChild(this.div);
	}
	//화면에 어떻게 그려질지를 결정하는 메서드
	render(){
		this.div.style.opacity=parseFloat(this.div.style.opacity) + this.a*(this.targetOp-parseFloat(this.div.style.opacity));
	}
}