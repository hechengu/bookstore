package com.example.bookstore.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class ProductModel {
	@Id
	private Integer PRODUCTID;
	private String PRODUCTAUTHOR;
	private String PRODUCTAUTHORBIO;
	private String PRODUCTCATEGORY;
	private String PRODUCTCONDITION;
	private String PRODUCTDESCRIPTION;
	private String PRODUCTNAME;
	private double PRODUCTPRICE;
	private String PRODUCTPUBLISHER;
	private String PRODUCTRELEASEDATE;
	private String PRODUCTSTATUS;
	private String TOPSELLERSTATUS;
	private int UNITINSTOCK;
	private double NUMRATING;	
	private double RATING;
	private double TOTAL_RATING;
	
	public Integer getId() {
		return PRODUCTID;
	}
	public void setId(Integer PRODUCTID) {
		this.PRODUCTID = PRODUCTID;
	}	
	public String getAuthor() {
		return PRODUCTAUTHOR;
	}
	public void setAuthor(String PRODUCTAUTHOR) {
		this.PRODUCTAUTHOR = PRODUCTAUTHOR;
	}	
	public String getBio() {
		return PRODUCTAUTHORBIO;
	}
	public void setBio(String PRODUCTAUTHORBIO) {
		this.PRODUCTAUTHORBIO = PRODUCTAUTHORBIO;
	}
	public String getCategory() {
		return PRODUCTCATEGORY;
	}
	public void setCategory(String PRODUCTCATEGORY) {
		this.PRODUCTCATEGORY = PRODUCTCATEGORY;
	}	
	public String getCondition() {
		return PRODUCTCONDITION;
	}
	public void setCondition(String PRODUCTCONDITION) {
		this.PRODUCTCONDITION = PRODUCTCONDITION;
	}	
	public String getDescription() {
		return PRODUCTDESCRIPTION;
	}
	public void setDescription(String PRODUCTDESCRIPTION) {
		this.PRODUCTDESCRIPTION = PRODUCTDESCRIPTION;
	}	
	public String getName() {
		return PRODUCTNAME;
	}
	public void setName(String PRODUCTNAME) {
		this.PRODUCTNAME = PRODUCTNAME;
	}
	public double getPrice() {
		return PRODUCTPRICE;
	}
	public void setPrice(double PRODUCTPRICE) {
		this.PRODUCTPRICE = PRODUCTPRICE;
	}	
	public String getPublisher() {
		return PRODUCTPUBLISHER;
	}
	public void setPublisher(String PRODUCTPUBLISHER) {
		this.PRODUCTPUBLISHER = PRODUCTPUBLISHER;
	}		
	public String getReleaseDate() {
		return PRODUCTRELEASEDATE.substring(0,10);
	}	
	public void setReleaseDate(String PRODUCTRELEASEDATE) {
		this.PRODUCTRELEASEDATE = PRODUCTRELEASEDATE;
	}	
	public String getStatus() {
		return PRODUCTSTATUS;
	}
	public void setStatus(String PRODUCTSTATUS) {
		this.PRODUCTSTATUS = PRODUCTSTATUS;
	}	
	public String getTopSeller() {
		return TOPSELLERSTATUS;
	}
	public void setTopSeller(String TOPSELLERSTATUS) {
		this.TOPSELLERSTATUS = TOPSELLERSTATUS;
	}
	public int getUnit() {
		return UNITINSTOCK;
	}
	public void setUnit(int UNITINSTOCK) {
		this.UNITINSTOCK = UNITINSTOCK;
	}	
	public double getpeopleRating() {
		return NUMRATING;
	}
	public void setpeopleRating(double NUMRATING) {
		this.NUMRATING = NUMRATING;
	}	
	public double getRating() {
		return RATING;
	}
	public void setRating(double RATING) {
		this.RATING = RATING;
	}
	public double getOverallRating() {
		return TOTAL_RATING;
	}
	public void setOverallRating(double TOTAL_RATING) {
		this.TOTAL_RATING = TOTAL_RATING;
	}
	
}
