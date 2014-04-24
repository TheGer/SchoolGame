#pragma strict
//on the ground
private var grounded:boolean;
private var anim:Animator;

function Start () {
	//get the animator component associated with the player
	anim = GetComponent(Animator);
	grounded = false;	
}

function FixedUpdate () {
	
	//horizontal movement
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	//use the space bar to jump
	if (grounded == true && Input.GetKeyDown(KeyCode.UpArrow))
	{
		//jump
		rigidbody.AddForce(Vector3(0,500,0));
	
	}
	anim.SetBool("left",false);
	anim.SetBool("right",false);
	//if I am moving left
	if (Input.GetAxis("Horizontal")<0)
	{
		anim.SetBool("left",true);
	}
	//if I am moving right
	if(Input.GetAxis("Horizontal")>0)
	{
		anim.SetBool("right",true);
	}	
}