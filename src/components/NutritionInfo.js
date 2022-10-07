const NutritionInfo = ({nutrients}) => {
    return (
        <div>
            {
                Object.entries(nutrients).map(([nutrient, amount])=>{
                    return <div>
                        {nutrient}: {amount}
                    </div>
                })
            }
        </div>
    )
}

export default NutritionInfo;