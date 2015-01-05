package com.example.task1;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.Toast;

public class MainActivity extends Activity implements OnClickListener {
	Context appContext;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		((Button)findViewById(R.id.submitbtn)).setOnClickListener(this);

		appContext = this;

	}

	@Override
	public void onClick(View v) {
		// TODO Auto-generated method stub
		String strName = ((EditText) findViewById(R.id.edtName)).getText()
				.toString().trim();
		String strContact = ((EditText) findViewById(R.id.edtContact))
				.getText().toString().trim();

		CheckBox ug = (CheckBox) findViewById(R.id.chkbox1);
		CheckBox pg = (CheckBox) findViewById(R.id.chkbox2);
		int id = ((RadioGroup) findViewById(R.id.radiogrp1))
				.getCheckedRadioButtonId();
		String strGender = "";
		String qualification = "";
		if ((v.getId() == R.id.submitbtn)) {

			if (id == R.id.radioButton1) {
				strGender = "Male";
			} else {
				strGender = "Female";
			}
			if (ug.isChecked()) {
				qualification = qualification + "," + ug.getText();
			}
			if (pg.isChecked()) {
				qualification = qualification + "," + pg.getText();
			}

			if (strName.length() == 0) {
				Toast.makeText(appContext, "Name field can't be blank.",
						Toast.LENGTH_LONG).show();
			} else if (strContact.length() == 0) {
				Toast.makeText(appContext, "Contact field can't be blank.",
						Toast.LENGTH_LONG).show();
			} else if (strGender.length() == 0) {
				Toast.makeText(appContext, "Select your gender.",
						Toast.LENGTH_LONG).show();
			} else if (qualification.length() == 0) {
				Toast.makeText(appContext, "Select your qualification.",
						Toast.LENGTH_LONG).show();
			} else {
				Toast.makeText(
						appContext,
						"Name: " + strName + "\nContact: " + strContact
								+ "\nGender: " + strGender
								+ "\nQualification :" + qualification,
						Toast.LENGTH_LONG).show();
			}
		}
	}

}
