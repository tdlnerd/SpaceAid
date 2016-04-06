var Program : GameObject;

function Launch () {

	if (GameObject.FindGameObjectsWithTag(Program.gameObject.name).Length > 0) {
	return;
	}
var OS = GameObject.Find("Canvas").transform;
var LaunchedApp = Instantiate(Program, transform.position, Quaternion.identity);
LaunchedApp.transform.SetParent(OS, false);
}

function Update () {

}